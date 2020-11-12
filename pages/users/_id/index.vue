<template>
    <div>
        <h2>This is user id {{$route.params.id}}</h2>
    </div>
</template>

<script>
    export default {
        validate({params}){
            return /^\d+$/.test(context.params.id)
        }
    }
</script>