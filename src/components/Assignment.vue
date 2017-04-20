<template>
    <div class="col-md-6">
        <div class="panel panel-default">
            <div class="panel-body single-assignment">
                <h3>{{ post.title }}</h3>
                <p>{{ post.content }}</p><br />
                <a class="btn btn-default" :href="'#/post/' + post._id">View</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',

    props: {
        post: Object
    }
}
</script>
