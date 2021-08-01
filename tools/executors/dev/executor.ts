import { BuildExecutorSchema } from './schema';

// cross-env RAZZLE_APP_PATH=basic-1

export default async function runExecutor(options: BuildExecutorSchema) {

  console.log('Executor ran for Build', options);
  return {
    success: true,
  };
}
