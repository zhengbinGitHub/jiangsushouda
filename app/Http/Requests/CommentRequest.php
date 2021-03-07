<?php

namespace App\Http\Requests;


class CommentRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
			'email' => 'required|email',
			'tel' => 'required',
			'content' => 'required',
        ];
    }

    public function messages()
	{
		return [
			'name.required' => '姓名不能为空',
			'email.required' => '邮箱不能为空',
			'email.email' => '邮箱格式错误',
			'tel.required' => '电话不能为空',
			'content.required' => '内容不能为空',
		];
	}
}
