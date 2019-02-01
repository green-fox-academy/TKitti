'use strict'
export { }


class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
}

let post1 = new BlogPost();
post1.authorName = 'John Doe';
post1.title = 'Lorem ipsum';
post1.text = 'Lorem ipsum dolor sit amet.';
post1.publicationDate = '2000.05.04.';

let post2 = new BlogPost();
post2.authorName = 'Tim Urban';
post2.title = 'Wait but why';
post2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
post2.publicationDate = '2010.10.10.';

let post3 = new BlogPost();
post3.authorName = 'William Turton';
post3.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
post3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
post3.publicationDate = '2017.03.28.';
