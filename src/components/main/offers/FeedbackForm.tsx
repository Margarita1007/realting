import { Form, Input, Layout, Radio, Select, Space } from 'antd';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FeedbackForm: React.FC = () => {
    return (
        <Layout className='feedback-form-container'>
            <Space direction='horizontal' className='seller-block'>
                <div className='seller-logo'>
                    Фотка
                </div>
                <div className='seller-info'>
                    Агент продавца
                </div>
            </Space>
            <Space direction='vertical'>
                <h3>Оставить заявку на объект</h3>
                <Form
                layout="vertical"
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <Input
                            type='text'
                            placeholder="Ваше имя *" 
                            className='signup_input'
                            />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <Input
                            type='text'
                            placeholder="Email *" 
                            className='signup_input'
                            />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <PhoneInput
                            country={'ru'}
                            // localization={ru}
                            //value={this.state.phone}
                        />
                    </Form.Item>
                    <Form.Item
                        name="language"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <Select
                            placeholder="Предпочитаемый язык общения" 
                            className='signup_select signup_select_gender'
                        >
                            <Select.Option value="ru">Русский</Select.Option>
                            <Select.Option value="en">English</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="message"
                        label="Введите сообщение"
                        rules={[{ required: true }]}
                        >
                        <Radio.Group value={0}>
                            <Radio value={1}>Выбрать из предложенного</Radio>
                            <Radio value={2}>Написать свой текст</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Space>
        </Layout>
    )
}

export default FeedbackForm;