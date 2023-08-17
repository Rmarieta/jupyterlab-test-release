import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the releasetest extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'releasetest:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension releasetest is activated!');
  }
};

export default plugin;
