// import { CheckCircleOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons"
// import { Button, Form, Input, Space, Steps, Typography } from "antd"
// import { useState } from "react";
// function App() {
//   const [current, setCurrent] = useState(0);
//   const [loginValues, setLoginValues] = useState({});
//   const [profileValues, setProfileValues] = useState({});
//   function onFinish(values) {
//     setLoginValues(values);
//     setCurrent(current + 1);
//   }
//   function onFinishProfile(values) {
//     setProfileValues(values);
//     setCurrent(current + 1);
//   }

//   const forms = [
//     <LoginForm onFinish={onFinish} initialValues={loginValues} />,
//     <ProfileForm onFinishProfile={onFinishProfile} initialValues={profileValues} />,
//     <Finish />
//   ]
//   return (
//     <div className="flex flex-col items-center justify-center h-lvh" >
//       <Steps className="w-1/2" current={current} onChange={setCurrent}>
//         <Steps.Step title="Login" icon={<UserOutlined />} />
//         <Steps.Step title="Profile" icon={<ProfileOutlined />} />
//         <Steps.Step title="Finish" icon={<CheckCircleOutlined />} />
//       </Steps>
//       <div className="w-1/2 mt-4 p-4 border rounded-lg shadow-lg bg-white">
//         {
//           forms[current]
//         }
//       </div>
//     </div>
//   )
// }

// function Finish() {
//   return (
//     <Typography.Title level={3} className="text-center">
//       You have successfully completed the steps!
//     </Typography.Title>
//   )
// }
// function LoginForm({ onFinish, initialValues }) {
//   return (
//     <Form onFinish={onFinish} initialValues={initialValues}>
//       <Form.Item
//         name='username'
//         label='Username'
//         rules={[{ required: true, message: 'Please input your username!' }]}

//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name={'password'}
//         label='Password'
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input.Password />
//       </Form.Item>
//       <Button type="primary" htmlType="submit">Next</Button>
//     </Form>
//   )
// }
// function ProfileForm({ onFinishProfile, initialValues }) {
//   return (
//     <Form onFinish={onFinishProfile} initialValues={initialValues}>
//       <Form.Item
//         label='First Name'
//         name='firstName'
//       >
//         <Input placeholder="first name..." />
//       </Form.Item>
//       <Form.Item
//         label='Last Name'
//         name='lastName'
//       >
//         <Input placeholder="last name..." />
//       </Form.Item>
//       <Button type="primary" htmlType="submit">
//         Next
//       </Button>
//     </Form>
//   )
// }

// export default App


import { CheckCircleOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Steps, Typography } from "antd";
import { Children, useState } from "react";

// Reusable StepForm component
function StepForm({ steps }) {
  const [current, setCurrent] = useState(0);
  const [formValues, setFormValues] = useState({});

  const CurrentForm = steps[current].component;

  const handleFinish = (values) => {
    setFormValues((prev) => ({ ...prev, ...values }));
    if (current < steps.length - 1) {
      setCurrent(current + 1);
    }
  };
  function isStepDisabled(index) {
    // Disable steps that are not yet completed
    return index > current;
  }

  return (
    <div className="flex flex-col items-center justify-center h-lvh">
      <Steps className="w-1/2" current={current} onChange={setCurrent}>
        {steps.map((step, idx) => (
          <Steps.Step disabled={isStepDisabled(idx)} key={idx} title={step.title} icon={step.icon} />
        ))}
      </Steps>
      <div className="w-1/2 mt-4 p-4 border rounded-lg shadow-lg bg-white">
        <CurrentForm
          onFinish={handleFinish}
          initialValues={formValues}
          isLast={current === steps.length - 1}
        />
      </div>
    </div>
  );
}

// Individual step forms
function LoginForm({ onFinish, initialValues }) {
  return (
    <Form onFinish={onFinish} initialValues={initialValues}>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </Form>
  );
}

function ProfileForm({ onFinish, initialValues }) {
  return (
    <Form onFinish={onFinish} initialValues={initialValues}>
      <Form.Item label="First Name" name="firstName">
        <Input placeholder="first name..." />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName">
        <Input placeholder="last name..." />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </Form>
  );
}

function Finish() {
  return (
    <Typography.Title level={3} className="text-center">
      You have successfully completed the steps!
    </Typography.Title>
  );
}

// Usage in App
function App() {
  const steps = [
    {
      title: "Login",
      icon: <UserOutlined />,
      component: LoginForm,
      children: <LoginForm />,
    },
    {
      title: "Profile",
      icon: <ProfileOutlined />,
      component: ProfileForm,
      children: <ProfileForm />,
    },
    {
      title: "Finish",
      icon: <CheckCircleOutlined />,
      component: Finish,
      children: <Finish />,
    },
  ];

  return <StepForm steps={steps} />;
}

export default App;