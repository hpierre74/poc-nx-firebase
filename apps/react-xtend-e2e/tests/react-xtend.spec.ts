import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('react-xtend e2e', () => {
  it('should create react-xtend', async () => {
    const plugin = uniq('react-xtend');
    ensureNxProject('@poc-nx-firebase/react-xtend', 'dist/libs/react-xtend');
    await runNxCommandAsync(
      `generate @poc-nx-firebase/react-xtend:react-xtend ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Executor ran');
  }, 120000);

  describe('--directory', () => {
    it('should create src in the specified directory', async () => {
      const plugin = uniq('react-xtend');
      ensureNxProject('@poc-nx-firebase/react-xtend', 'dist/libs/react-xtend');
      await runNxCommandAsync(
        `generate @poc-nx-firebase/react-xtend:react-xtend ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
    }, 120000);
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async () => {
      const plugin = uniq('react-xtend');
      ensureNxProject('@poc-nx-firebase/react-xtend', 'dist/libs/react-xtend');
      await runNxCommandAsync(
        `generate @poc-nx-firebase/react-xtend:react-xtend ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
    }, 120000);
  });
});
