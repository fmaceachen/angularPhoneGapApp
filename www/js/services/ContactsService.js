'use strict';

app.factory('ContactsService', ['$q', function($q) {

  var getContacts = function (nameFilter) {
    var defer = $q.defer();

    var options = new ContactFindOptions();
    options.filter   = nameFilter;
    options.multiple = true;
    options.desiredFields = ['displayName'];
    var contactFields = ['*'];

    var contactSuccess = function (contacts) {
          var auxContacts = [];
          angular.forEach(contacts, function(contact, key) {
            if(contact.phoneNumbers && contact.phoneNumbers[0].value)
              this.push(contact);
          }, auxContacts);

          var n = 3,
            results = auxContacts.slice(0,(auxContacts.length+n-1)/n|0).
              map(function(c,i) { return auxContacts.slice(n*i,n*i+n); });
          defer.resolve(results);
        },
      contactError = function (contactsError) {
        console.log('Contacts error: ' + contactsError);
        defer.reject(contactsError);
      };

    navigator.contacts.find(contactFields, contactSuccess, contactError, options);
    return defer.promise;
  };

  return {
    getContacts: getContacts
  }

}]);