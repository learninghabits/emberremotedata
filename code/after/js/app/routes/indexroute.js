Application.IndexRoute = Ember.Route.extend({
    model : function() {
       return Ember.$.get('/api/topics');
    }
});