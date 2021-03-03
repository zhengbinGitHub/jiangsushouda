<?php

namespace App\Http\Requests\Article;

use App\Http\Requests\BaseRequest;

class StoreRequest extends BaseRequest
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
            'title' => 'required',
            'group_id' => 'required|numeric',
            'desc' => 'required',
			'content' => 'required'
        ];
    }

    public function messages()
	{
		return [
			'title.required' => '文章标题不能为空',
			'group_id.required' => '请选择分类',
			'desc.required' => '文章描述为空',
			'content.required' => '内容不能为空'
		];
	}
}
