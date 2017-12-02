<template>
	<header class="header" :class="{ 'header-fixed' : headerFixed }">
        <el-row>
            <el-col :span="24">
              <el-menu default-active="/index" theme='dark'  class="el-menu-demo" mode="horizontal" @select="" :router="true">
                <el-menu-item index="/index">主页</el-menu-item>
                <el-menu-item index="/flow">流量统计</el-menu-item>
                <el-menu-item index="/message">短信</el-menu-item>
                <el-menu-item index="/update">更新</el-menu-item> 
                <el-menu-item index="/settings">设置</el-menu-item>
                <el-menu-item index="/more">
                    <el-dropdown>
                      <span class="el-dropdown-link" style='color:white'>
                        更多<i class="el-icon-caret-bottom el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>SD卡</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </header>
</template>


<script>
    
export default {
	data:function(){
	    return {
	        headerFixed:false
	    }
	}
}

</script>

<style>
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
</style>