Application.TopicRoute = Ember.Route.extend({
    model : function(data) {
        var topicId = data.id;
       return Ember.$.get('/api/topic/' + topicId);
    }
});