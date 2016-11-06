import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Form, Input, Button,Select,DatePicker,Radio,Checkbox } from 'antd';
const FormItem = Form.Item;
Mock.mock('http://ajax.data.com',{
    'myName':'樱木花道'
});
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
  checkBirthday(rule, value, callback){
    if (value && value.valueOf() >= Date.now()) {
      callback(new Error("你不可能生于未来吧"));
    } else {
      callback();
    }
  },
  ajaxCheck(rules,value,callback){
        $.ajax({
            url:'http://ajax.data.com',
            dataType:'json',
            success:function(data){
                if(value == data['myName']){
                    callback(new Error("樱木花道已注册"));
                }else{
                    callback();
                }
            }
        });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules:
             [
                { required: true, type:'string',message: '用户名不能为空' },
                { min: 3, type:'string',message: '用户名不能少于3位' },
                { max: 6, type:'string',message: '用户名不能多于6位' },
                { pattern:/^[\u2E80-\u9FFF]+$/,type:'string',message: '用户名必须为汉字' },
                {validator: this.ajaxCheck}

             ]
          })(
            <Input  placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('selectName',{
            rules:[{ required:true, type:'string',message:'请选择国家'}], 
          })(
            <Select>
              <Select.Option value="">请选择</Select.Option>
              <Select.Option value="USA">美国</Select.Option>
              <Select.Option value="Korea" disabled>韩国</Select.Option>
              <Select.Option value="Japan">日本</Select.Option>
            </Select>
          )}
        </FormItem> 

        <FormItem>
          {getFieldDecorator('radioChoise',{
            rules:[{required:true,type:'string',message:'请选择性别'}]
          })(
            <Radio.Group>
               <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
            </Radio.Group>  
          )}
        </FormItem>
        <FormItem>
         {getFieldDecorator('interest')(
            <Checkbox.Group options={['读书', '跑步', '网游']} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('birthday', {
            rules: [
              {
                required: true,
                type: 'object',
                message: '生日不可为空',
              }, {
                validator: this.checkBirthday,
              },
            ],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem>
          
          <Button type="primary" htmlType="submit">
            提交
          </Button>
         
        </FormItem>
      </Form>
    );
  },
}));

ReactDOM.render(<NormalLoginForm />, document.getElementById('app'));

    