<template>
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-body">
                <p>{{ code.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Code',

    props: {
        code: Object
    }
}
</script>
