import axios from 'axios';

import { GetExampleRequestPayload } from '@/api/payloads';
import { GetExampleResponseBody } from '@/api/example/response';
import { endpoints } from '@/api/endpoints';

export default {
  getExampleId: (payload: GetExampleRequestPayload) => axios.get<GetExampleResponseBody>(endpoints.example(payload.id)),
};
