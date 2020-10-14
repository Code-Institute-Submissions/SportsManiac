describe('processURL', function () {
    var testURL = 'http://thisIsaTest/&APIKEY&/&PARAMETER&';

    describe('processURL tests', function () {
        it('should return http://thisIsaTest/4013017/testing123', function () {
            expect(processURL(testURL, 'testing123')).toBe('http://thisIsaTest/4013017/testing123');
        });
        it('should return http://thisIsaTest/4013017/Boston', function () {
            expect(processURL(testURL, 'Boston')).toBe('http://thisIsaTest/4013017/Boston');
        });
        it('should return http://thisIsaTest/4013017/Boston red sox', function () {
            expect(processURL(testURL, 'Boston red sox')).toBe('http://thisIsaTest/4013017/Boston red sox');
        })
    })
})