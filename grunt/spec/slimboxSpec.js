describe('Slimbox', function(){

  var scope, element;

  beforeEach(function(){
    module('slimboxComponent');
    module('templates');
  })

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<slimbox></slimbox>');
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should contain a "slimbox" class attribute', function(){
    console.log(element);
    expect(element.hasClass('slimbox')).toBeTruthy();
  });

});
