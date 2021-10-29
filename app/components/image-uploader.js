import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class ImageUploaderComponent extends Component {
  @service
  fileQueue;

  @action
  async handleFile(file) {
    const fileType = file.blob.type;
    const extension = file.extension;

    try {
      const resp = await fetch('/.netlify/functions/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileType, extension }),
      });

      if (resp.status >= 400) {
        throw new Error(resp.statusText);
      }

      const signature = await resp.json();
      const parsedYouAreEll = new URL(signature.uploadURL);
      const uploadResult = await file.uploadBinary(signature.uploadURL, {
        method: 'PUT',
      });

      if (uploadResult.status >= 400) {
        throw new Error(uploadResult.statusText);
      }

      this.args.didUpload(`${parsedYouAreEll.origin}${parsedYouAreEll.pathname}`);
    } catch (e) {
      const queue = this.fileQueue.find('photos');
      queue.remove(file);

      alert('Hmm, something went wrong. Check your internet connection and try again.', e.toString());
    }
  }
}
