// Custom Post Property

var isAnswer = {
  propertyName: 'isAnswer',
  propertySchema: {
    type: Boolean,                           // property type
    optional: false,                         // make this property optional
    defaultValue: true
  }
}
var isCommentToAnswer = {
  propertyName: 'isCommentToAnswer',
  propertySchema: {
    type: Boolean,                           // property type
    optional: true,                         // make this property optional
    defaultValue: true
  }
}
addToCommentsSchema.push(isAnswer, isCommentToAnswer);