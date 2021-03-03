import { get, post } from './http'


/**
 * 获取文章详情
 * @param {Object} p {id:模版id}
 */
export const getDes = p => get(`/poster/detail/${p.id}`)

/**
 * 编辑文章
 * @param {Object} p
 * {
 * id:文章id,
 * data:{
 *      id:模版ID
 *      status:模版状态 1=>正常 0=>下线
 *      template:正文内容
 *      title:模版标题
 *      type:模版类型 
 *      type_son: 活动类型
 *      }
 * }
 */
export const saveDes = p => post('/poster/save', p)
