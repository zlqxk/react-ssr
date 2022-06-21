import React from 'react'
import App from './_app'
import { hydrateRoot } from 'react-dom/client'

hydrateRoot(document.getElementById('__root')!, <App __DATA__={window.__DATA__} />)
