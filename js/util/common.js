function getPageUrl(code) {
    let pageUrl = "";
    switch (code) {
        case 'yingyu':
        pageUrl = 'english.html'
            break;
        case 'riyu':
        pageUrl = 'japanese.html'
            break;
        case 'kaoyan':
        pageUrl = 'graduate.html'
            break;
        case 'deyu':
        pageUrl = 'german.html'
            break;
        case 'hanyu':
        pageUrl = 'korean.html'
            break;
        case 'yasi':
        pageUrl = 'IELTS.html'
            break;
        case 'fayu':
        pageUrl = 'french.html'
            break;
        case 'yidayiyu':
        pageUrl = 'Italy.html'
            break;
        default:
            alert('没有任何类型')
    }
    return pageUrl
}