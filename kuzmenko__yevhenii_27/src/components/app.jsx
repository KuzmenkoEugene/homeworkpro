import React from 'react';
import { Route, Routes} from 'react-router-dom';

import { RenderUserList } from './constructor/userlist.jsx';
import { RenderAlbumsList } from './constructor/albumslist.jsx';
import { RenderPhotoList } from './constructor/photolist.jsx';

export const App = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<RenderUserList />} />
        <Route path={`albums/:id`} element={<RenderAlbumsList />} />
        <Route path={'photos/:id'} element={<RenderPhotoList />} />
      </Routes>
    </main>
  );
};