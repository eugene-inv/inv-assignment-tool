<template>
    <div>
        <main class="assignment-list create">
            <div class="row">
                <div class="col-md-12">
                    <h1>Create Assignment</h1>
                </div>
                <div class="col-md-12">
                    <br />
                    <br />
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <input type="text" class="form-control" v-model="title" placeholder="Enter title">
                            <textarea class="form-control" v-model="content" placeholder="Enter content">
                            </textarea>
                            <button class="btn btn-default" v-on:click="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>




<style lang="scss">
    @import './../scss/main.scss';
</style>

<script>
import Post from '../components/Assignment'
import store from '../store'

export default {
    components: {
        Post
    },

    data () {
        return {
            id: '',
            title: '',
            content: '',
            createdAt: '',
            type: '',
            posts: []
        }
    },

    created () {
        store.reloadPosts(this, 'posts')
    },

    methods: {
        submit () {
            const data = {
                'type': 'post',
                'title': this.title,
                'content': this.content,
                'createdAt': new Date().toJSON()
            }
            store.create(data).then(results => {
                store.reloadPosts(this, 'posts')
            })
            this.title = ''
            this.content = ''
        }
    }
}
</script>
