<template>
    <div>
        <main class="assignment">
            <header class="assignment__summary">
                <h1><h2>{{ post.title }}</h2></h1>
                <p>A basic, plain-text challenge</p>
                <ul>
                    <li>An unordered list</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ul>
                <ol>
                    <li>An ordered list</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ol>
            </header>

            <div class="assignment__input">

                <h2>Input</h2>

                <form>
                    <textarea></textarea>
                    <button type="submit">Check</button>
                </form>

            </div>

            <div class="assignment__output">
                <h2>Output</h2>
                <pre>{{ post.content }}</pre>
            </div>

            <div class="assignment__feedback">
                <h2>Success!</h2>
                <p>Feedback about your submission and progress</p>
            </div>
        </main>

        <div class="row">
            <div class="col-md-12">
                <h3 class="page-header">Comments ({{ comments.length }})</h3>
            </div>
            <comment
                v-for="comment in comments"
                :comment="comment">
            </comment>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <input type="text" class="form-control" v-model="content" placeholder="Enter content">
                        <button class="btn btn-default" v-on:click="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from '../components/Comment'
import store from '../store'

export default {
    components: {
        Comment
    },

    data () {
        return {
            _id: '',
            post: '',
            comments: [],
            content: '',
            type: '',
            createdAt: '',
            postId: ''
        }
    },

    route: {
        data ({ to }) {
            return store.findPostById(to.params.id).then(post =>
                store.findCommentsByPostId(post._id).then(comments => ({
                    post: post,
                    comments: comments
                }))
            )
        }
    },

    methods: {
        submit () {
            const data = {
                content: this.content,
                type: 'comment',
                createdAt: new Date().toJSON(),
                postId: this.post._id
            }
            store.create(data).then(() => {
                store.reloadComments(this, 'comments', this.post._id)
            })
            this.content = ''
        }
    }
}
</script>
