<?php

namespace App\Http\Requests\Group;

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
            'name' => 'required|unique:groups',
			'alias' => 'required|unique:groups',
            'memo' => 'required',
            'type' => 'required',
        ];
    }

	/**
	 * @return array
	 */
    public function messages()
	{
		return [
			'name.required' => '分类名称不能为空',
			'name.unique' => '分类名称不能重复',
			'memo.required' => '分类描述不能为空',
			'alias.required' => '分类英文名称不能为空',
			'type.required' => '分类类型不能为空',
		];
	}
}
