import Type from './mutations-type'
import { UserInfo } from '@/api/Response'
import { UserState } from '@/store/user/userModule'
export default {
  /**
   * 获取用户信息
   */
  [Type.GET_USERINFO](state: UserState, data: UserInfo): void {
    state.allowedGroup = data.allowedGroup
    state.level = data.level
  }
}
