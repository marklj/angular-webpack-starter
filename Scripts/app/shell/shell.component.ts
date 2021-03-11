import { Component, OnInit } from '@angular/core';
import { Logger } from '../@core/logger.service';

const log = new Logger('Shell');

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {
  ngOnInit(): void {
    log.error('not implemented');
  }
}
