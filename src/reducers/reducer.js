export default function (topicList = [], action) {

    if (action.type == 'T') {
        return action.topic

    } else if (action.type == 'T') {
        var topicListCopy = [...topicList]

        var findTopic = false

        for (let i = 0; i < topicListCopy.length; i++) {
            if (topicListCopy[i].title == action.sujet.title) {
                findTopic = true
            }
        }

        if (!findTopic) {
            topicListCopy.push(action.sujet)
        }
    }
}