<template>
    <div class="container">

        <div class="row">
            <div class="col-3">
                <AdminSideBar />
            </div>
            <div class="col-9">
                 <AdminContent />
            </div>
        </div>
        
    </div>
</template>

<script>

import AdminSideBar from '@/components/admin/AdminSideBar';
import AdminContent from '@/components/admin/AdminContent';

export default {

middleware: 'auth',

components: {
    AdminSideBar,
    AdminContent
  }
}

</script>
<style lang="sass" scoped>

</style>