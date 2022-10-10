import Module from "../modules/module";

export const init = async (...modules: Module[]): Promise<void> => {
  await Promise.all(
    modules.map((module) =>
      module.init().catch((err) => {
        throw err;
      })
    )
  );
};
