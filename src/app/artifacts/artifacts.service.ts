import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Artifact } from "./artifact.model";

@Injectable({providedIn: 'root'})
export class ArtifactsService {
  private artifacts: Artifact[] = [];
  private artifactsUpdated = new Subject<Artifact[]>();

  constructor(private http: HttpClient) {}

  getArtifacts() {
    this.http
      .get<{ message: string, artifacts: any }>(
        'http://localhost:3000/api/artifacts'
      )
      .pipe(map((artifactData) => {
        return artifactData.artifacts.map(artifact => {
          return {
              id: artifact._id,
              name: artifact.name,
              set: artifact.set,
              level: artifact.level,
              maxLevel: artifact.maxLevel,
              equippedTo: artifact.equippedTo,
              mainStat: artifact.mainStat,
              mainStatBonus: artifact.mainStatBonus,
              subStats: artifact.subStats,
              subStatsBonuses: artifact.subStatsBonuses
          };
        });
      }))
      .subscribe((transformedArtifacts) => {
        this.artifacts = transformedArtifacts;
        this.artifactsUpdated.next([...this.artifacts])
      });
  }

  getArtifactUpdateListener() {
    return this.artifactsUpdated.asObservable();
  }

  addArtifact(name: string,
              set: string,
              level: number,
              maxLevel: number,
              equippedTo: string,
              mainStat: string,
              mainStatBonus: string,
              subStats: string[],
              subStatsBonuses: string[]) {

    const artifact: Artifact = {
      id: null,
      name: name,
      set: set,
      level: level,
      maxLevel: maxLevel,
      equippedTo: equippedTo,
      mainStat: mainStat,
      mainStatBonus: mainStatBonus,
      subStats: subStats,
      subStatsBonuses: subStatsBonuses
    };

    this.http.post<{ message: string, artifactId: string }>('http://localhost:3000/api/artifacts', artifact)
      .subscribe((responseData) => {
        const id = responseData.artifactId;
        artifact.id = id;
        this.artifacts.push(artifact);
        this.artifactsUpdated.next([...this.artifacts]);
      });
  }

  deleteArtifact(artifactId: string) {
    this.http.delete("http://localhost:3000/api/artifacts/" + artifactId)
      .subscribe(() => {
        const updatedArtifacts = this.artifacts.filter(artifact => artifact.id !== artifactId);
        this.artifacts = updatedArtifacts;
        this.artifactsUpdated.next([...this.artifacts]);
      });
  }
}
