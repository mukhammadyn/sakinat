module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          id: 'c0dc3320-cd70-45cb-a64f-e81bb6045111',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Nullam porttitor lacus at turpis.',
          cover_img: 'post_default_cover.png',
          content:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '7f49fbe5-192a-4dab-8175-dcc64706f7ae',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Etiam justo.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'eed87ce5-7868-4c3c-9bf5-a36e0166c87b',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Suspendisse potenti.',
          cover_img: 'post_default_cover.png',
          content:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '6a352ff6-711a-4d02-91a4-8cf980ade1cb',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          cover_img: 'post_default_cover.png',
          content:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '464ea00b-7c22-4f05-9e19-23e9d5265178',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Donec vitae nisi.',
          cover_img: 'post_default_cover.png',
          content: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '4a2f7b55-3fd5-48f7-9ab4-3611fbb9331e',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Duis at velit eu est congue elementum.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'e0877e72-a854-4b73-87ea-66ba58b29db8',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Aenean auctor gravida sem.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '589ce47d-d492-4714-acdc-dd76837d9396',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Mauris ullamcorper purus sit amet nulla.',
          cover_img: 'post_default_cover.png',
          content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '326c0a04-590a-4f30-bacb-bd4426a8e0c7',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'Maecenas tincidunt lacus at velit.',
          cover_img: 'post_default_cover.png',
          content:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '2096f5ef-aebc-40ab-b416-981b5654150e',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
          cover_img: 'post_default_cover.png',
          content:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '9c1f08f6-8874-47a3-92bf-bd93c0dd17b7',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'e9bb95db-9306-4004-9dd6-ec67b517f5bf',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Ut at dolor quis odio consequat varius.',
          cover_img: 'post_default_cover.png',
          content: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '904fe0dc-fa9c-485e-91dc-8e86517c874f',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Nunc rhoncus dui vel sem.',
          cover_img: 'post_default_cover.png',
          content:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'a621ddc7-352d-4249-9b01-e53cd186d795',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Sed vel enim sit amet nunc viverra dapibus.',
          cover_img: 'post_default_cover.png',
          content:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'de60f672-78cf-49ef-be51-3fcecba61546',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
          cover_img: 'post_default_cover.png',
          content:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '09554667-8e6e-493c-81da-9a4316b19a9d',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'Nulla facilisi.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '4cd04003-7a81-4ee7-b878-b89c696f21ed',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Praesent lectus.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '9565f1ab-ae7b-4e23-902b-4b749ba0e3e1',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Duis mattis egestas metus.',
          cover_img: 'post_default_cover.png',
          content:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'e85db8ea-458e-4fe4-bc40-57d587b51063',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
          cover_img: 'post_default_cover.png',
          content:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '4084a075-3a50-4e12-ad2c-936caf31baff',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          cover_img: 'post_default_cover.png',
          content:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '4c7347e3-7923-4cec-afcf-622f852a4458',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Duis consequat dui nec nisi volutpat eleifend.',
          cover_img: 'post_default_cover.png',
          content: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '2b0b16fa-3289-49c0-9b94-dabc2b558536',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Aliquam erat volutpat.',
          cover_img: 'post_default_cover.png',
          content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'b5eb64e9-c986-4b03-b4d2-acef80795bff',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Fusce consequat.',
          cover_img: 'post_default_cover.png',
          content:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '89ef3159-c0a1-4b68-8852-71f9a256405c',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Suspendisse potenti.',
          cover_img: 'post_default_cover.png',
          content:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '30525bbb-76ff-43a5-94c0-c2def2e1dfc1',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
          cover_img: 'post_default_cover.png',
          content:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '6f13ecce-feb7-4dcd-9d40-1b080c2cc230',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          cover_img: 'post_default_cover.png',
          content:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '0ddeb07d-c193-40d4-92c8-18189b00ae89',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          cover_img: 'post_default_cover.png',
          content:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '2baa04cc-fba2-4616-9cb1-f02bb80803c9',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Donec dapibus.',
          cover_img: 'post_default_cover.png',
          content: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'a8358b62-be8c-414c-94b0-8dfa637523f7',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
          cover_img: 'post_default_cover.png',
          content:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '045e2877-6142-49fb-a4cb-0cb3a01703a8',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          cover_img: 'post_default_cover.png',
          content:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '801aa236-1773-4670-bac1-425695684eac',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'Donec posuere metus vitae ipsum.',
          cover_img: 'post_default_cover.png',
          content: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'd2db7b82-4ff4-4174-9b9a-3be73353345a',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Integer non velit.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'bf3b68d0-4844-4117-aa04-08f94d6e3955',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          cover_img: 'post_default_cover.png',
          content:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'ff192dc5-60f9-403e-b807-d8313646f196',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Morbi porttitor lorem id ligula.',
          cover_img: 'post_default_cover.png',
          content: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'a6ffbaf5-be74-4eac-a0d6-328acfe089e8',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Nunc nisl.',
          cover_img: 'post_default_cover.png',
          content: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '776ccaaf-f86e-4c1c-b267-d6c7a58f7f48',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Nam nulla.',
          cover_img: 'post_default_cover.png',
          content:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'faf77186-5fc5-438e-bac4-8461e45543dd',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Mauris sit amet eros.',
          cover_img: 'post_default_cover.png',
          content: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'ab1878d9-63a5-4c7d-b6b4-d7cc6cad75ab',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Donec semper sapien a libero.',
          cover_img: 'post_default_cover.png',
          content:
            'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '7fdd0c37-b028-43e3-aa42-76552a9f8e97',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '1f17d712-cb19-465b-941d-f16102d561f2',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
          cover_img: 'post_default_cover.png',
          content:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'b652f097-540b-49d6-9ae0-1cbb459ab296',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Aenean auctor gravida sem.',
          cover_img: 'post_default_cover.png',
          content:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '2d12ef2c-2b14-4298-ae8e-5b687e13e150',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '5125e09e-eaeb-440d-adc7-9b8db64ead77',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Morbi ut odio.',
          cover_img: 'post_default_cover.png',
          content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '85df7f6c-94a4-439d-b343-83e4aa508532',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '5f1f09ee-9f69-4655-8838-a5867c1d24b5',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Suspendisse potenti.',
          cover_img: 'post_default_cover.png',
          content: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'ddb0eb5c-546f-4cf5-bb78-b7ccae19178d',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Sed ante.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '97413727-4969-4954-9c40-8410370e2919',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Etiam justo.',
          cover_img: 'post_default_cover.png',
          content:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '16a6ec1b-bec3-4087-914a-edd9603fc63d',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Maecenas pulvinar lobortis est.',
          cover_img: 'post_default_cover.png',
          content: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '14f43763-0cb0-4d92-96d9-30f95042a191',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title:
            'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          cover_img: 'post_default_cover.png',
          content: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '798b83da-a83a-41dd-940b-38a4e224c8d9',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Praesent blandit.',
          cover_img: 'post_default_cover.png',
          content:
            'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '20ff44e6-6a83-4b5d-9a00-5fe74abda714',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Mauris lacinia sapien quis libero.',
          cover_img: 'post_default_cover.png',
          content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '0a4ac160-13bc-44ad-ad7f-c6d4d05fe421',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Mauris sit amet eros.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '27d4df94-2631-4529-8d10-e64886d1b343',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Aliquam quis turpis eget elit sodales scelerisque.',
          cover_img: 'post_default_cover.png',
          content: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'e10c0b19-f362-4053-9e5e-f2081cbe15b3',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Nullam molestie nibh in lectus.',
          cover_img: 'post_default_cover.png',
          content:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'de895e87-4fc6-484f-a29a-db4b9001c5dc',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Fusce consequat.',
          cover_img: 'post_default_cover.png',
          content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'aec0c198-7033-4f74-a18a-68917ab32838',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          cover_img: 'post_default_cover.png',
          content:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'b201e1ce-edf9-4cf1-802e-775e7e1827fc',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
          cover_img: 'post_default_cover.png',
          content: 'Fusce consequat. Nulla nisl. Nunc nisl.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'cca19159-e59c-43e5-94d3-92b3a783e2fb',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Mauris sit amet eros.',
          cover_img: 'post_default_cover.png',
          content:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'bcc896d6-e90d-4e5d-9c90-7307859576da',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Morbi non quam nec dui luctus rutrum.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '7a752648-2db5-4c2a-a4de-e09b8fc754c8',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Maecenas tincidunt lacus at velit.',
          cover_img: 'post_default_cover.png',
          content:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '21f11c8a-9056-4df8-b613-2df8ab3aa82e',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
          cover_img: 'post_default_cover.png',
          content: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '1977b7c4-1e45-49ed-8fcf-eee423c437f0',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Donec semper sapien a libero.',
          cover_img: 'post_default_cover.png',
          content: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'beddcb84-88ae-4b19-9900-9067a030b511',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Proin eu mi.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'c6ccb9b8-b907-48e7-a48e-47f1ae22dabe',
          author_id: 'defa3d85-636b-4f08-b6c0-5ecce5d22983',
          title: 'Sed ante.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '585896aa-f50d-4b63-8a68-32ceb0a64cd9',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'In sagittis dui vel nisl.',
          cover_img: 'post_default_cover.png',
          content:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'df0ba0db-bc19-4f6d-9173-c9919a5d737b',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Nam tristique tortor eu pede.',
          cover_img: 'post_default_cover.png',
          content:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '8de6ccf8-c19f-4e9a-ad02-21b7a7c0bcaa',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Suspendisse potenti.',
          cover_img: 'post_default_cover.png',
          content:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'c953eb51-c7b1-4624-9cd1-c1bfe22961f7',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'Donec semper sapien a libero.',
          cover_img: 'post_default_cover.png',
          content:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '9c98c146-836c-432b-b0d2-94d3db543f7f',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Cras pellentesque volutpat dui.',
          cover_img: 'post_default_cover.png',
          content:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '7e316cb0-82fd-49d6-addd-d5eade1df64d',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title:
            'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
          cover_img: 'post_default_cover.png',
          content:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '5e322163-0e7a-41c0-9f57-ca9e91ac2f87',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Maecenas ut massa quis augue luctus tincidunt.',
          cover_img: 'post_default_cover.png',
          content: 'Fusce consequat. Nulla nisl. Nunc nisl.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '575e2958-bf43-4263-9f18-de69b9711820',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Cras in purus eu magna vulputate luctus.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '08a4dc6f-50ce-46ed-82c4-edfa76d6d948',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
          cover_img: 'post_default_cover.png',
          content:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '2c2c1155-3282-4c03-acfd-33bfb5ac0548',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Vestibulum ac est lacinia nisi venenatis tristique.',
          cover_img: 'post_default_cover.png',
          content:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '7392be71-2303-40f5-b087-9674687a4927',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'Nulla tellus.',
          cover_img: 'post_default_cover.png',
          content:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '27f17aa4-f8fb-4031-b416-609ddb24e21d',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'In hac habitasse platea dictumst.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'b2529b54-92f5-47a3-96f1-f58f1627d97e',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          cover_img: 'post_default_cover.png',
          content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'd0b04c78-1b7c-4199-8ac2-80f981145a30',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          cover_img: 'post_default_cover.png',
          content:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '0b2ccb95-c44a-4515-9fb1-b7ba3f7fd00f',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '6dafd2d0-38cd-4d5e-bbd1-7f73483d4794',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'In eleifend quam a odio.',
          cover_img: 'post_default_cover.png',
          content:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'a006f3d4-40e5-462c-9989-99e4a85a1b0c',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Maecenas tincidunt lacus at velit.',
          cover_img: 'post_default_cover.png',
          content: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'cf4c97d0-ab11-4ad1-bc65-45380efb1d02',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          cover_img: 'post_default_cover.png',
          content:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '47a3bee6-8dfa-4f30-bb16-9f07f5cfa70e',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title: 'Cras non velit nec nisi vulputate nonummy.',
          cover_img: 'post_default_cover.png',
          content:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '0de86d03-a75e-44b5-ae14-0bcf046b806f',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Aliquam sit amet diam in magna bibendum imperdiet.',
          cover_img: 'post_default_cover.png',
          content: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'bc24ebea-8c18-4321-a298-d9e0b303eccb',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          cover_img: 'post_default_cover.png',
          content:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '775e21ca-3c0d-424a-8517-c3d276461cad',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
          cover_img: 'post_default_cover.png',
          content:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '973f53e6-2aac-4851-b8e2-4f487e5802df',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          cover_img: 'post_default_cover.png',
          content: 'Fusce consequat. Nulla nisl. Nunc nisl.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '69ba27d1-db70-4052-882e-cf46a3babc2e',
          author_id: '2c48b98c-0dc9-46e6-8733-6075cba156a3',
          title:
            'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
          cover_img: 'post_default_cover.png',
          content:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '05b6730c-37d5-4437-9aa6-f586934ac6e3',
          author_id: 'ef317fc0-e20d-4a58-93c9-d4ef26478b86',
          title: 'Nunc nisl.',
          cover_img: 'post_default_cover.png',
          content:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '9cadf4c2-8db1-4c65-b59a-09ae455313a7',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title:
            'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
          cover_img: 'post_default_cover.png',
          content:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '4c4920d0-b806-4663-b7ff-69a6d5bbe312',
          author_id: '074fd00a-c3c2-4a15-846c-5c04323d0980',
          title: 'Nullam sit amet turpis elementum ligula vehicula consequat.',
          cover_img: 'post_default_cover.png',
          content:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '10ef3e37-4eda-47af-8045-7c5a4296ec5f',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Morbi porttitor lorem id ligula.',
          cover_img: 'post_default_cover.png',
          content:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'e6b2bdb9-2e02-4257-942a-05773beda237',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'In blandit ultrices enim.',
          cover_img: 'post_default_cover.png',
          content:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '4bd98856-0454-430e-a2f7-f034c5a0202b',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'Morbi non lectus.',
          cover_img: 'post_default_cover.png',
          content:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: 'b68f4f3d-8dd5-4a01-bc15-3f062217b12b',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          cover_img: 'post_default_cover.png',
          content:
            'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
          published: false,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '3488e016-b6c4-4dc0-a87a-ed5e8025545a',
          author_id: '5f5c74de-7336-4a8a-9671-6f0fa2c53bca',
          title: 'Nulla mollis molestie lorem.',
          cover_img: 'post_default_cover.png',
          content: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '655a9d89-d39c-4285-9221-fa61a13f707c',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'In hac habitasse platea dictumst.',
          cover_img: 'post_default_cover.png',
          content:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '0fb140e0-ce1f-42c5-bc39-43b635c422e8',
          author_id: 'fc9a55d4-b814-4aa5-988b-f4922744f291',
          title: 'Nullam porttitor lacus at turpis.',
          cover_img: 'post_default_cover.png',
          content:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '1ec0b82f-3af0-46a4-b4eb-42e2516cb0ba',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          cover_img: 'post_default_cover.png',
          content:
            'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        },
        {
          id: '557f4924-51da-47f5-a679-7b89e3b1d422',
          author_id: 'd7b58176-049a-4f98-982a-722d07ec99b2',
          title: 'Suspendisse potenti.',
          cover_img: 'post_default_cover.png',
          content:
            'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
          published: true,
          createdAt: '2021-12-15',
          updatedAt: '2021-12-15'
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
