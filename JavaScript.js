

      /**
       * Creates an instance of a Person.
       * @param {string} who - The name of the person.
       */
      const BROWSER = navigator.userAgent.search("Firefox") > -1;

      export default class Person {
         constructor(who, likesDogs) {
            this.who = who;
            this.likesDogs = likesDogs;
         }
         about() {
            const { who, likesDogs } = this;
            let select = 12345;
            if (likesDogs) {
               select = "dogs";
            } else {
               select = "cats";
            }
            return `${who} likes ${select}`;
         }
      }
      var John = new Person("John", true);
      class Someone extends Person {}
      console.log(John.about().length, BROWSER);



      console.log(Someone);
      let a = () => {};
