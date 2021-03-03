<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;


class UploadController extends Controller
{
    /**
     * 处理上传表单
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function __invoke(Request $request)
    {
         if(!$request->hasFile('files')) {
             return response()->json(['status'=>0,'message'=>'未选择上传图片']);
         }
         $files = $request->file('files');

        if($files instanceof  UploadedFile) {
            $files  = [$files];
        }

        $returns = [];
        foreach($files as $key => $file) {
            $result = $this->uploadFile($file);
            if(isset($result['error'])) {
                return response()->json(['status'=>0,'message'=>$result['message']]);
            }
            $returns[$key] = $result;
        }

        return response()->json(['status'=>1,'message'=>'上传图片完成','info'=>$returns]);
    }

    /**
     * 上传处理函数
     *
     * @param UploadedFile $file
     *
     * @return array
     */
    public function uploadFile(UploadedFile $file)
    {

        //上传文件最大大小,单位M
        $maxSize = 5;
        //支持的上传图片类型
        $allowed_extensions = ["png", "jpg", "gif","jpeg"];
        //返回信息json
        $data = ['error'=>1, 'message'=>'上传失败'];

        //检查文件是否上传完成
        if(!$file->isValid()) {
            $data['message'] = $file->getErrorMessage();
             return $data;
        }

        //检测图片大小
        if ($file->getSize() > $maxSize * 1024 * 1024){
            $data['message'] = "图片大小限制".$maxSize."M";
            return $data;
        }


        //检测图片类型
        $ext = $file->getClientOriginalExtension();     // 扩展名
        $origin = $file->getClientOriginalName();
        $size = $file->getSize();
        if (!in_array(strtolower($ext),$allowed_extensions)){
            $data['message'] = "请上传".implode(",",$allowed_extensions)."格式的图片";
            return $data;
        }


        $filename = config('ueditor.hash_filename') ? md5($file->getFilename()).'.'.$ext : $file->getClientOriginalName();
        $disk = Storage::disk(config('ueditor.disk'));

        $newFile = format_upload_path(config('ueditor.upload.imagePathFormat'),$filename);
        $res = $disk->put($newFile,fopen($file->getRealPath(), 'r+'));

        if(!$res) {
            $data['data'] = $file->getErrorMessage();
            return $data;
        }

        return  [
            'title' => $origin,
            'extension' => '.' . $ext,
            'type' => 1,
            'path'=>'/storage'.$newFile,
            'url' => $disk->url($newFile),
            'size' => $size
        ];

    }




}
