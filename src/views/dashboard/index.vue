<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      当前用户:{{ name }}
    </div>
    <div class="dashboard-text">
      权限:<span
        v-for="role in roles"
        :key="role"
      >{{ role }}</span>
    </div>
    <div class="dashboard-text">
      用户信息:{{ intro }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

@Component
export default class Dashboard extends Vue {
  get name() {
    return UserModule.name
  }

  get roles() {
    return UserModule.roles
  }

  get intro(){
    return UserModule.intro
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
