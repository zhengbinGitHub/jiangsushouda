<?php

namespace App\Http\Requests\Advertise;

use App\Http\Requests\BaseRequest;

class UpdateRequest extends BaseRequest
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
			'imgs.*' => 'required',
			'link' => 'required',
		];
	}

	public function messages()
	{
		return [
			'title.required' => '通栏图片标题不能为空',
			'imgs.*.required' => '通栏图片不能为空',
			'link.required' => '通栏图片连接不能为空',
		];
	}
}
