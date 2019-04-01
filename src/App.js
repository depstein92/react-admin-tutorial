import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import UserList from './users';
import PostList from './posts';
import PostEdit from './postedit';
import PostCreate from './postcreate';
import DashBoard from './dashboard';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


const App = () => (
    <Admin dataProvider={dataProvider} dashboard={DashBoard}>
       <Resource
         name="posts"
         list={PostList}
         edit={PostEdit}
         create={PostCreate}
         icon={PostIcon}
        />
       <Resource
         name="users"
         list={UserList}
         icon={UserIcon}
        />
    </Admin>
)


export default App;
