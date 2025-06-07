// filepath: c:\Users\khaled.mahmoud\Desktop\antd-sandbox\src\components\Item.js
import { TreeSelect, Skeleton } from "antd";
import React from "react";
import { useDebounce } from "../hooks/useDebounce";
import DropdownIcon  from "../assets/icons/DropdownIcon";
import { useGetItemsDropdownPagedQuery } from "../store/apis/GiftCard";

function getDropDown(data) {
  return data?.map((item) => ({
    label: item?.Text,
    value: item?.Value,
  }));
}

export const mapValue = (values) =>
  values?.map((v) =>
    typeof v === "object" && v !== null && "Value" in v ? v.Value : v
  );

const ItemsSelect = ({ value, onChange, disabled = false }) => {
  const [page, setPage] = React.useState(1);
  const [filters, setFilters] = React.useState({
    basicFilters: [],
    rangeFilters: [],
  });
  const debouncedFiltersValue = useDebounce(filters, { delay: 500 });

  const { data, isLoading, isFetching } = useGetItemsDropdownPagedQuery({
    itemsPerPage: 10,
    page,
    filters: debouncedFiltersValue,
    sortBy: "Text",
  });

  const [options, setOptions] = React.useState({});

  const handleSearch = (searchValue) => {
    setFilters({
      basicFilters: [{ key: "Text", op: "Contains", value: searchValue }],
      rangeFilters: [],
    });
    setPage(1);
  };

  React.useEffect(() => {
    if (data?.data) {
      setOptions((prev) => {
        const currentFilterValue =
          debouncedFiltersValue?.basicFilters[0]?.value?.toString() || "";
        const newOptions = [...(getDropDown(data.data) ?? [])];
        const prevOptions = prev[currentFilterValue] || [];
        const initialOptions = [...(getDropDown(value) ?? [])];
        const combinedOptions = [
          ...initialOptions,
          ...prevOptions,
          ...newOptions,
        ]
          .filter(
            (option, index, self) =>
              self.findIndex((t) => t?.value === option?.value) === index
          )
          .filter((option) =>
            option?.label
              ?.toLowerCase()
              .includes(currentFilterValue?.toLowerCase() ?? "")
          );

        return {
          ...prev,
          [currentFilterValue]: combinedOptions,
        };
      });
    }
  }, [data, value, debouncedFiltersValue]);

  const treeData = options[filters.basicFilters[0]?.value?.toString()]
    ?.sort((a, b) => {
      const aInValue = mapValue(value)?.includes(a.value);
      const bInValue = mapValue(value)?.includes(b.value);

      if (aInValue && !bInValue) {
        return -1;
      }
      if (!aInValue && bInValue) {
        return 1;
      }
      return a.label.localeCompare(b.label);
    })
    ?.map((option) => ({
      title: option.label,
      value: option.value,
      key: option.value,
      isLeaf: true,
    }));

  return (
    <TreeSelect
      showSearch
      value={mapValue(value)}
      disabled={disabled}
      // onPopupScroll={(e) => {
      //   const target = e.target;
      //   if (
      //     target.scrollTop + target.offsetHeight >= target.scrollHeight - 1 &&
      //     !isLoading &&
      //     !isFetching
      //   ) {
      //     setPage((prev) => {
      //       if (data?.pagesNum && prev < data.pagesNum) {
      //         return prev + 1;
      //       }
      //       return prev;
      //     });
      //   }
      // }}
      dropdownRender={(menu) => (
        <div>
          {menu}
          {isLoading || isFetching ? (
            <Skeleton.Input active style={{ width: "100%" }} />
          ) : null}
        </div>
      )}
      onSearch={handleSearch} 
      onChange={onChange}
      loading={isLoading || isFetching}
      filterTreeNode={false}
      placeholder='Select Items'
      switcherIcon={<DropdownIcon />}
      notFoundContent={
        isLoading || isFetching ? (
          <Skeleton.Input active style={{ width: "100%" }} />
        ) : undefined
      }
      treeData={treeData}
      searchValue={filters.basicFilters[0]?.value}
      autoClearSearchValue={false}
      multiple
      className='w-full'
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_ALL}
    />
  );
};

export default ItemsSelect;
