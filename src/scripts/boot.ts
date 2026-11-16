/** Page boot: start every tool found on the page. */
import { initTool } from './tool-ui';

document.querySelectorAll<HTMLElement>('[data-tool]').forEach((root) => {
  try {
    initTool(root);
  } catch (err) {
    console.error('HearMyMic: the tool failed to start', err);
  }
});
