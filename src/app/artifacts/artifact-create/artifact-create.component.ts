import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ArtifactsService } from "../artifacts.service";

@Component({
  selector: 'app-artifact-create',
  templateUrl: './artifact-create.component.html',
  styleUrls: ['./artifact-create.component.css']
})
export class ArtifactCreateComponent {
  artifact_list = [
    {
      name: "Adventurer's Flower",
      set: "Adventurer",
      maxLevel: 4
    },
    {
      name: "Adventurer's Tail Feather",
      set: "Adventurer",
      maxLevel: 4
    },
    {
      name: "Adventurer's Pocket Watch",
      set: "Adventurer",
      maxLevel: 4
    },
    {
      name: "Adventurer's Golden Goblet",
      set: "Adventurer",
      maxLevel: 4
    },
    {
      name: "Adventurer's Bandana",
      set: "Adventurer",
      maxLevel: 4
    }
  ];

  characters = ['',
  'Albedo',
  'Amber',
  'Barbara',
  'Beidou',
  'Bennett',
  'Chongyun',
  'Diluc',
  'Diona',
  'Eula',
  'Fischl',
  'Ganyu',
  'Hu Tao',
  'Jean',
  'Kaeya',
  'Keqing',
  'Klee',
  'Lisa',
  'Mona',
  'Ningguang',
  'Noelle',
  'Qiqi',
  'Razor',
  'Rosaria',
  'Sucrose',
  'Tartaglia',
  'Traveler',
  'Venti',
  'Xiangling',
  'Xiao',
  'Xingqiu',
  'Xinyan',
  'Yanfei',
  'Zhongli'
];

  stats = [
    'HP',
    'ATK',
    'DEF',
    'Elemental Mastery',
    'Energy Recharge',
    'Physical DMG Bonus',
    'Pyro DMG Bonus',
    'Hydro DMG Bonus',
    'Electro DMG Bonus',
    'Anemo DMG Bonus',
    'Cryo DMG Bonus',
    'Geo DMG Bonus',
    'CRIT Rate',
    'CRIT DMG',
    'Healing Bonus'
  ]

  selectedArtifact = {
    name: "",
    set: "",
    maxLevel: 4
  };

  constructor(public artifactsService: ArtifactsService) {}

  onAddArtifact(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.artifactsService.addArtifact(form.value.selectedArtifact.name,
                                      form.value.selectedArtifact.set,
                                      form.value.inputLevel,
                                      form.value.selectedArtifact.maxLevel,
                                      form.value.selectedCharacter,
                                      form.value.inputMainStat,
                                      form.value.inputMainStatBonus,
                                      [form.value.inputSubStat1, form.value.inputSubStat2, form.value.inputSubStat3, form.value.inputSubStat4],
                                      [form.value.inputSubStat1Bonus, form.value.inputSubStat2Bonus, form.value.inputSubStat3Bonus, form.value.inputSubStat4Bonus]
                                      )
    form.resetForm();
  }
}
