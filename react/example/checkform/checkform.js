import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button,Select} from 'antd';
const FormItem = Form.Item;

const NormalLoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {

      if (err) {
        return;
      }

      console.log('获取的值：', values);
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '用户名不能为空!' }],
          })(
            <Input  placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('selectName',{
            rules:[{ required:true, message:'select必选一项' }], 
          })(
            <Select>
              <Select.Option value="">请选择</Select.Option>
              <Select.Option value="2">JACK</Select.Option>
              <Select.Option value="0" disabled>不能选</Select.Option>
              <Select.Option value="3">TOM</Select.Option>
            </Select>
          )}
        </FormItem>        
        <FormItem>
          
          <Button type="primary" htmlType="submit">
            登录
          </Button>
         
        </FormItem>
      </Form>
    );
  },
}));

ReactDOM.render(<NormalLoginForm />, document.getElementById('app'));

    