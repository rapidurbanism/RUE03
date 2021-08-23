import React from "react";
import { Modal, Form, Input } from "antd";

const ProjectNameModal = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Save simulation"
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="filename"
            >
                <Form.Item
                    name="filename"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a file name.',
                        },
                    ]}
                >
                    <Input placeholder="File name" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ProjectNameModal