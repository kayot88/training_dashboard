import { makeAutoObservable } from "mobx";
class MobxDNDClass {
  store = { dropDepth: 0, inDropZone: false, fileList: [] };
  constructor() {
    makeAutoObservable(this);
  }
  handleDrop(e) {
    console.log("inStore", this.store.fileList);
    let files = [...e.dataTransfer.files];
    console.log("files", files);
    if (files && files.length > 0) {
      const excistingFiles = this.store.fileList.map((f) => f.name);
      files = files.filter((n) => !excistingFiles.includes(n.name));
      this.store.fileList.concat(files);

    }
      this.store.dropDepth = 0;
      this.store.inDropZone = false;
  }
  handleDragEnter() {
    this.store.dropDepth += 1;
  }

  handleDragLeave() {
    this.store.dropDepth -= 1;
    if (this.store.dropDepth > 0) return;
    this.store.inDropZone = false;
    // console.log(this.store.fileList);
  }

  handleDragOver(e) {
    e.dataTransfer.dropEffect = "copy";
    this.store.inDropZone = true;
  }
}

export default new MobxDNDClass();
