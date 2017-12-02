import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import Flow from '@/components/main/flow'
import Index from '@/components/main/index'
//短信
import Message from '@/components/main/message/message'
import SmsDrafts from '@/components/main/message/smsDrafts'
import SmsInbox from '@/components/main/message/smsInbox'
import SmsSent from '@/components/main/message/smsSent'

import Update  from '@/components/main/update'
import More from '@/components/main/more'

/*++++++设置**/
import Settings from '@/components/main/settings/settings'
//快速设置
import FastSetting from '@/components/main/settings/fastSetting'
// 拨号
import DialConnect from '@/components/main/settings/dialConnect'
import DialProfileManager from '@/components/main/settings/dialProfileManager'
import DialRouterSetting from '@/components/main/settings/dialRouterSetting'
//wlan
import WlanAdvanceSettings from '@/components/main/settings/wlanAdvanceSettings'
import WlanBaseSettings from '@/components/main/settings/wlanBaseSettings'
import WlanDhcp from '@/components/main/settings/wlanDhcp'
import WlanDhcpStaticIp from '@/components/main/settings/wlanDhcpStaticIp'
import WlanDnsServer from '@/components/main/settings/wlanDnsServer'
import WlanMacFilter from '@/components/main/settings/wlanMacFilter'
//安全
import SafeLanIpFilter from '@/components/main/settings/safeLanIpFilter'
import SafePinManger from '@/components/main/settings/safePinManger'
import SafeViturlServer from '@/components/main/settings/safeViturlServer'
//系统
import SysDeviceInfo from '@/components/main/settings/sysDeviceInfo'
import SysModifyPwd from '@/components/main/settings/sysModifyPwd'
import SysReboot from '@/components/main/settings/sysReboot'
import SysRestore from '@/components/main/settings/sysRestore'
/*------设置**/


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/flow',
      name: 'flow',
      component: Flow
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      children:[
          {path:'',component:SmsInbox},
          {path:'smsInbox',component:SmsInbox},
          {path:'smsDrafts',component:SmsDrafts},
          {path:'smsSent',component:SmsSent}
      ]
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      children:[
        {path:'',component:FastSetting},
        {path:'fastSetting',component:FastSetting},
        {path:'dialConnect',component:DialConnect},
        {path:'dialProfileManager',component:DialProfileManager},
        {path:'dialRouterSetting',component:DialRouterSetting},

        {path:'wlanBaseSettings',component:WlanBaseSettings},
        {path:'wlanAdvanceSettings',component:WlanAdvanceSettings},
        {path:'wlanMacFilter',component:WlanMacFilter},
        {path:'wlanDhcp',component:WlanDhcp},
        {path:'wlanDnsServer',component:WlanDnsServer},
        {path:'wlanDhcpStaticIp',component:WlanDhcpStaticIp},

        {path:'safePinManger',component:SafePinManger},
        {path:'safeLanIpFilter',component:SafeLanIpFilter},
        {path:'safeViturlServer',component:SafeViturlServer},

        {path:'sysDeviceInfo',component:SysDeviceInfo},
        {path:'sysModifyPwd',component:SysModifyPwd},
        {path:'sysRestore',component:SysRestore},
        {path:'sysReboot',component:SysReboot}
      ]
    },
    {
      path: '/more',
      name: 'more',
      component: More
    }

  ]
})
