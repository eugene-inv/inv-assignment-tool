<template>
    <div class="row">
        <div class="col-md-12">
            <h2 class="page-header">Asignments</h2>
        </div>
        <post
            v-for="post in posts"
            :post="post">
        </post>
        <div class="col-md-4">
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

    <main class="assignment-list">

        <header class="assignment-list__summary">
            <h1>My assignments</h1>
            <p>A list of assignments for me</p>
        </header>

        <div class="assignment-list__feedback">
            <h2>Progress</h2>
            <p>Feedback about your submission and progress</p>
        </div>

        <div class="assignment-list__assignments">

            <h2>In progress</h2>
            <ol>
                <li><a href="#">Code challenge</a></li>
            </ol>

            <h2>To-do</h2>
            <ol>
                <li><a href="#">Simple assignment</a></li>
                <li><a href="#">Code assignment</a></li>
                <li><a href="#">Multiple-choice test</a></li>
            </ol>

            <h2>Complete</h2>
            <ol>
                <li><a href="#">Simple assignment</a></li>
                <li><a href="#">Code assignment</a></li>
            </ol>

        </div>

    </main>
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
