var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            var replacedText = text
            replacedText = replacedText.replace(/lane of self\-driving cars/, 'light rail');
            replacedText = replacedText.replace(/lanes of self\-driving cars/, 'light rail');
            replacedText = replacedText.replace(/self\-driving cars on the highway/, 'high speed rail');
            
            replacedText = replacedText.replace(/Self\-Driving Cars/, 'City Buses');
            replacedText = replacedText.replace(/self\-driving cars/, 'city buses');
            replacedText = replacedText.replace(/self\-driving car/, 'city bus');
            replacedText = replacedText.replace(/Self\-Driving Car/, 'City Bus');
            
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}


