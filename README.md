# A simple REST API wrapper using Axios

### Using the wrapper

- Create the client (`apiClient.ts`):

```typescript
import axios from 'axios';

import { createAxiosRestApiClient } from '@xirelogy/axios-rest-api';

// Create the instance
const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 60000,
});

// Expose the client
const apiClient = createAxiosRestApiClient(instance);
export default apiClient;
```

- Using the client (`login.ts`):

```typescript
import apiClient from './apiClient';


// Login example
async function login(username: string, password: string): Promise<string> {
  const resp = await apiClient.post({
    url: `/rest/login`,
    data: {
      username: username,
      password: password,
    },
  });
  
  return extractLoginToken(resp);
}
```


### Currently supported method

- `get`
- `post`
- `put`
- `delete`

