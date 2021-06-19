import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs'

import { Artifact } from '../artifact.model'
import { ArtifactsService } from "../artifacts.service";

@Component({
  selector: 'app-artifact-list',
  templateUrl: './artifact-list.component.html',
  styleUrls: ['./artifact-list.component.css']
})
export class ArtifactListComponent implements OnInit, OnDestroy {

  artifacts: Artifact[] = [];
  private artifactsSub: Subscription;

  constructor(public artifactsService: ArtifactsService) {}

  ngOnInit() {
    this.artifactsService.getArtifacts();
    this.artifactsSub = this.artifactsService.getArtifactUpdateListener()
      .subscribe((artifacts: Artifact[]) => {
        this.artifacts = artifacts
      });
  }

  onDelete(artifactId: string) {
    this.artifactsService.deleteArtifact(artifactId);
  }

  ngOnDestroy() {
    this.artifactsSub.unsubscribe();
  }
}
