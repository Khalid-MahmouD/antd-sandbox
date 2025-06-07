import { useState } from "react";
import axios from 'axios';

const fetchItemsDropdownPaged = async ({ queryKey }) => {
  const [_key, { itemsPerPage, page, filters, sortBy }] = queryKey;
  const response = await axios.get('/api/items', {
    params: {
      itemsPerPage,
      page,
      filters,
      sortBy,
    },
  });
  return response.data;
};

const mockData = Array.from({ length: 20 }, (_, i) => ({
  Text: `Item ${i + 1}`,
  Value: i + 1,
}));

export const useGetItemsDropdownPagedQuery = ({ itemsPerPage = 10, page = 1 }) => {
  const [isLoading] = useState(false);
  const [isFetching] = useState(false);

  // Simulate paged data
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pagedData = mockData.slice(start, end);

  return {
    data: {
      data: pagedData,
      pagesNum: Math.ceil(mockData.length / itemsPerPage),
    },
    isLoading,
    isFetching,
  };
};