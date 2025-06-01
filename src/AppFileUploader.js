import {Button, Spin, Upload} from 'antd'
import 'antd/dist/reset.css'
const MATH_SIZE_LIMIT = 2 // MB
function App() {
  return (
    <div
    className='flex justify-center items-center h-screen w-full bg-gray-100'
    >
      <Upload.Draggeryou
      disabled
      multiple listType='picture'action={''} showUploadList={{showRemoveIcon: true, showPreviewIcon: true}}
      accept='.png,.jpg,.jpeg,.gif,.webp,.svg'
      beforeUpload={(file) => {

        const isLt4M = file.size / 1024 / 1024 < MATH_SIZE_LIMIT
        if (!isLt4M) {
          alert(`Image must smaller than ${MATH_SIZE_LIMIT}MB!`)
          return Upload.LIST_IGNORE
        }
        return true
      }}
      defaultFileList={[
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'uploading',
          percent: 50,
          url: 'https://www.example.com/xxx.png',
        }
      ]}
      iconRender={() => <Spin />}
      progress={{
        strokeWidth: 3,
        strokeColor: {
          '0%': '#f0f',
          '100%': '#ff0',
        },
        style: {
          top:12
        }
      }}
      // itemRender={(existingComp, file) => <p>{file.name}</p>}
      >
        Drag files here OR
        <br />
        <Button>Click Upload</Button>
      </Upload.Draggeryou>
    </div>
  )
}

export default App
