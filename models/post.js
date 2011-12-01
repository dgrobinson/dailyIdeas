var mongoose = require( 'mongoose' )
    , Schema = mongoose.Schema;

    var postSchema = new Schema( {
            title       : String
                ,   content : String
                    ,   date    : { type: Date, default: Date.now }
                    } );

                    postSchema.methods.date_display = function () {
                        var date = this.date.getDate();
                            var month = this.date.getMonth() + 1;
                                var year = this.date.getFullYear();
                                    var dateString = month + "/" + date + "/" + year;
                                        return dateString;
                                        };

                                        module.exports = mongoose.model( 'Post', postSchema );
