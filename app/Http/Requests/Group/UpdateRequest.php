<?php

namespace App\Http\Requests\Group;

use App\Http\Requests\BaseRequest;
use App\Models\Group;

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
    	$id = request('id');
        return [
            'name' => ['required', function($attribute,$value,$fail) use($id){
        		$name = Group::query()->where('id', $id)->value('name');
        		if($name != $value){
        			if(Group::query()->where('name', $value)->count()){
						$fail(':attribute 分类名称重复');
					}
				}
			}],
			'memo' => 'required',
        ];
    }

	/**
	 * @return array
	 */
	public function messages()
	{
		return [
			'name.required' => '分类名称不能为空',
			'memo.required' => '分类描述不能为空',
		];
	}
}
